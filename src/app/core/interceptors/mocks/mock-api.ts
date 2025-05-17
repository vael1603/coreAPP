import { LoginMock } from "./mocks-response/login.mock";

class MockUrl {
    url = '';
    json = {};
    code? = 200;
}

export const urls: MockUrl[] = [
    {
        url: 'user/login',
        json: LoginMock,
        // json: ErrorLoginMock,
        // code: 401
    },
];