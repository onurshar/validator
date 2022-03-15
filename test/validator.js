import assert from 'assert';
import validator from '../src/scripts/validator';

describe('validator', ()=> {

    describe('isPdf()', () =>{
        it('should return false for nonPdf file names', function () {
            assert.equal(validator.isPdf('deneme.txt'), false)
            assert.equal(validator.isPdf('deneme.jpg'), false)
            assert.equal(validator.isPdf('deneme.mobi'), false)
            assert.equal(validator.isPdf('deneme.json'), false)
            assert.equal(validator.isPdf('deneme.docx'), false)
            assert.equal(validator.isPdf('deneme'), false)
            assert.equal(validator.isPdf('onur.*pdf'), false)
            assert.equal(validator.isPdf('o nur . pdf'), false)
            assert.equal(validator.isPdf('o nur . pdf'), false)
            assert.equal(validator.isPdf('onur.pdfx'), false)
            assert.equal(validator.isPdf('abc.p d f'), false)
        });

        it('should return true for pdf file names', function () {
            assert.equal(validator.isPdf('dergi.pdf'), true)
            assert.equal(validator.isPdf('dergi(1).pdf'), true)
            assert.equal(validator.isPdf('on ur.pdf'), true)
            assert.equal(validator.isPdf('team_work.pdf'), true)
            assert.equal(validator.isPdf('team 1234 @5.pdf'), true)
            assert.equal(validator.isPdf('Monzo_bank_statement_2019_09_04-2021_08_22_6822.pdf'), true)
            assert.equal(validator.isPdf('onur.PDF'), true)

        });
    })

    describe('#isEmail()', () =>{

        it('should return false for invalid email adresses',() =>{
            assert.equal(validator.isEmail('popo'),false)
            assert.equal(validator.isEmail('691'),false)
            assert.equal(validator.isEmail('1234@asdas1234'),false)
            assert.equal(validator.isEmail('1234asdas1234@mynet.com@onur'),false)
            assert.equal(validator.isEmail('onur@onur@superonline.net'),false)
            assert.equal(validator.isEmail('o@o@nur.com'),false)
        })
        it('should return true for valid email adresses',() =>{
            assert.equal(validator.isEmail('popo@gmail.com'),true)
            assert.equal(validator.isEmail('onur@superonline.net'),true)
            assert.equal(validator.isEmail('691@yahoo.com'),true)
            assert.equal(validator.isEmail('1234asdas1234@mynet.com'),true)
            assert.equal(validator.isEmail('a1234slm@abc123.de'),true)

        })
    });
});