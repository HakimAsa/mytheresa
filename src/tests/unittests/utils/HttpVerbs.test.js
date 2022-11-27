import HV from '../../../utils/HttpVerbs';

describe('HTTM_METHODS (VERBS) TESTS', () => {
  it('should contain 4 main http verbs', () => {
    expect(HV).toEqual({
      GET: 'get',
      POST: 'post',
      PUT: 'put',
      DELETE: 'delete',
    });
  });
});
