import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Authorization', () => {

    beforeEach( () => {
        LoginPage.open();
     });

    afterEach( ()=> {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {

        LoginPage.setLogin('sbmike@mail.ru');
        LoginPage.setPassword('111QQqqq');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });

    it('submit button is disabled if login and password not filled', ()=> {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided', () => {

        LoginPage.setLogin('sbmike@gmail.com');
        LoginPage.setPassword('111QQqqq');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();

    });


});


