import { releaseVersion } from './releaseVersion'


describe('releaseVersion', () => {
    it('releaseVersion should create return version correctly', () => {
        expect(releaseVersion).toEqual('v0.0.1')
    })
})