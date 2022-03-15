import assert from 'assert';
import isEmail from '../src/scripts/isEmail';

describe('emailValidator', ()=> {

    describe('#isEmail()', () =>{

        it('should return false for invalid email adresses',() =>{
            assert.equal(isEmail.isEmail('popo'),false)
            assert.equal(isEmail.isEmail('691'),false)
            assert.equal(isEmail.isEmail('1234@asdas1234'),false)
            assert.equal(isEmail.isEmail('1234asdas1234@mynet.com@onur'),false)
            assert.equal(isEmail.isEmail('onur@onur@superonline.net'),false)
            assert.equal(isEmail.isEmail('o@o@nur.com'),false)
        })
        it('should return true for valid email adresses',() =>{
            assert.equal(isEmail.isEmail('popo@gmail.com'),true)
            assert.equal(isEmail.isEmail('onur@superonline.net'),true)
            assert.equal(isEmail.isEmail('691@yahoo.com'),true)
            assert.equal(isEmail.isEmail('1234asdas1234@mynet.com'),true)
            assert.equal(isEmail.isEmail('a1234slm@abc123.de'),true)

        })
    });
});