import React, { useState, useReducer } from "react";
import { useTranslation } from "../../langs/useTranslation";
import * as localforage from "localforage";
import { mapMaps } from "../../helpers/mapSize";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import RoomIcon from "@mui/icons-material/Room";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import ClickBtn from "../common/ClickBtn";
import { emailValidator } from "../../helpers/validator";
import emailjs from "emailjs-com";
import dayjs from "dayjs";
import Noty from "../common/Noty";
import Loading from "../common/Loading";
import { ContactReducer } from "../../reducers/ContactReducer";
import mapXs from "../../assets/images/map_xs.png";
let utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const Contact = () => {
    const { t } = useTranslation("contact");
    const {
        REACT_APP_CONTACT_USER_ID,
        REACT_APP_CONTACT_SERVICE_ID,
        REACT_APP_CONTACT_TEMPLATE_ID,
    } = process.env;
    emailjs.init(REACT_APP_CONTACT_USER_ID);
    const service_id = REACT_APP_CONTACT_SERVICE_ID;
    const template_id = REACT_APP_CONTACT_TEMPLATE_ID;
    const user_id = REACT_APP_CONTACT_USER_ID;
    const currentDateInUTC = () => dayjs.utc().format("YYYY-MM-DD HH:mm:ss");
    const [notyOpen, setNotyOpen] = useState(false);
    const [noty, setNoty] = useState({
        type: "success",
        text: "",
    });
    const [contactVariables, dispatch] = useReducer(ContactReducer, {
        name: "",
        email: "",
        emailFormatError: false,
        phone: "",
        content: "",
        check: false,
        btnDisabled: false,
    });

    const emailHandler = (e) => {
        dispatch({ type: "TYPE_EMAIL", payload: { value: e } });
    };

    const submit = async () => {
        const { name, email, phone, content } = contactVariables;
        const lastSubmitTime = await localforage.getItem("lastSubmitTime");
        if (
            lastSubmitTime &&
            dayjs(currentDateInUTC()).diff(
                dayjs(lastSubmitTime),
                "seconds",
                false
            ) < 60
        ) {
            setNoty((prev) => {
                prev.text = t("input.tooManyTry");
                prev.type = "error";
                return prev;
            });
            setNotyOpen(true);
            return;
        }
        if (!name || !email || !content) {
            dispatch({ type: "CHECK_TRUE" });
            return;
        }
        if (emailValidator().test(email) === false) {
            dispatch({ type: "EMAIL_ERROR" });
            return;
        }
        dispatch({ type: "BEFORE_SEND_EMAIL" });
        emailjs
            .send(
                service_id,
                template_id,
                {
                    email,
                    name,
                    content,
                    phone,
                    time: currentDateInUTC(),
                },
                user_id
            )
            .then(
                async () => {
                    dispatch({ type: "ENABLE_BUTTON" });
                    setNoty((prev) => {
                        prev.text = t("input.success");
                        prev.type = "success";
                        return prev;
                    });
                    setNotyOpen(true);
                    await localforage.setItem(
                        "lastSubmitTime",
                        currentDateInUTC()
                    );
                },
                (error) => {
                    setNoty((prev) => {
                        prev.text = t("input.error");
                        prev.type = "error";
                        return prev;
                    });
                    setNotyOpen(true);
                    dispatch({ type: "ENABLE_BUTTON" });
                }
            );
    };

    return (
        <div className='contact section'>
            <Noty
                open={notyOpen}
                setOpen={setNotyOpen}
                type={noty.type}
                text={noty.text}
            />
            <div className='title'>
                <div className='title-inner'>{t("contact")}</div>
            </div>
            <div className='subtitle'>{t("subtitle")}</div>
            <div className='main-area'>
                <div className='map'>
                    <picture>
                        {mapMaps.map((e) => (
                            <source
                                key={e.name}
                                media={`(min-width: ${e.size}px)`}
                                srcSet={e.map}
                            />
                        ))}
                        <img
                            src={mapXs}
                            alt='map-xs'
                        />
                    </picture>
                </div>
                <div className='contact-bottom'>
                    <div className='contact-content'>
                        <div className='contact-title'>{t("contact")}</div>
                        <div className='address'>
                            <div className='icon'>
                                <RoomIcon />
                            </div>
                            <div className='name'>{t("address")}</div>
                            <div className='value'>{t("addressValue")}</div>
                        </div>
                        <div className='phone-email'>
                            <div className='phone'>
                                <div className='icon'>
                                    <PhoneInTalkIcon />
                                </div>
                                <div className='name'>{t("phone")}</div>
                                <div className='value'>
                                    <div>{t("phoneValue1")}</div>
                                </div>
                            </div>
                            <div className='email'>
                                <div className='icon'>
                                    <EmailIcon />
                                </div>
                                <div className='name'>{t("email")}</div>
                                <div className='value'>
                                    <div>bear817005@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='survey'>
                        <div className='contact-title'>{t("input.title")}</div>
                        <div>
                            <div className='name-phone'>
                                <div className='name'>
                                    <FormControl
                                        error={
                                            contactVariables.check &&
                                            !contactVariables.name
                                        }
                                        variant='standard'
                                    >
                                        <TextField
                                            required
                                            label={t("input.name")}
                                            placeholder={t("input.placeholder")}
                                            value={contactVariables.name}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "SET_NAME",
                                                    payload: {
                                                        value: e.target.value,
                                                    },
                                                })
                                            }
                                        />
                                        {contactVariables.check &&
                                            !contactVariables.name && (
                                                <FormHelperText id='component-error-text'>
                                                    {t("input.noName")}
                                                </FormHelperText>
                                            )}
                                    </FormControl>
                                </div>
                                <div className='phone'>
                                    <FormControl variant='standard'>
                                        <TextField
                                            label={t("input.phone")}
                                            placeholder={t("input.placeholder")}
                                            value={contactVariables.phone}
                                            type='number'
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "SET_PHONE",
                                                    payload: {
                                                        value: e.target.value,
                                                    },
                                                })
                                            }
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className='email'>
                                <FormControl
                                    error={
                                        (contactVariables.check &&
                                            !contactVariables.email) ||
                                        contactVariables.emailFormatError
                                    }
                                    variant='standard'
                                >
                                    <TextField
                                        required
                                        label={t("input.email")}
                                        placeholder={t("input.placeholder")}
                                        value={contactVariables.email}
                                        onChange={(e) =>
                                            emailHandler(e.target.value)
                                        }
                                    />
                                    {contactVariables.check &&
                                        !contactVariables.email && (
                                            <FormHelperText id='component-error-text'>
                                                {t("input.noEmail")}
                                            </FormHelperText>
                                        )}
                                    {contactVariables.emailFormatError && (
                                        <FormHelperText id='component-error-text'>
                                            {t("input.emailErrorFormat")}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </div>
                            <div className='content'>
                                <FormControl
                                    error={
                                        contactVariables.check &&
                                        !contactVariables.content
                                    }
                                    variant='standard'
                                >
                                    <TextareaAutosize
                                        required
                                        minRows={10}
                                        value={contactVariables.content}
                                        placeholder={t("input.content")}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "SET_CONTENT",
                                                payload: {
                                                    value: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                    {contactVariables.check &&
                                        !contactVariables.content && (
                                            <FormHelperText id='component-error-text'>
                                                {t("input.noContent")}
                                            </FormHelperText>
                                        )}
                                </FormControl>
                            </div>
                            <div className='btn'>
                                <ClickBtn
                                    disabled={contactVariables.btnDisabled}
                                    type='primaryBtn'
                                    text={
                                        contactVariables.btnDisabled ? (
                                            <Loading color='white' />
                                        ) : (
                                            t("input.sendMail")
                                        )
                                    }
                                    onClick={submit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
