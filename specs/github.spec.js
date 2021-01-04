import GithubCard from '@/github-card';
import { mount } from '@vue/test-utils';

describe('methods', () => {
  test('composeUrl', () => {
    console.log('GithubCard: ', GithubCard);
    console.log('GithubCard.data.username: ', GithubCard.data.username);
    const { composeUrl } = GithubCard.methods;
    expect(composeUrl('fart-face')).toBe(
      'https://api.github.com/users/fart-face'
    );
    console.log(composeUrl('fart-face'));
  });

  test('fetchData', async () => {
    const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA');
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock
    });

    const wrapper = mount(GithubCard, {
      methods: {
        composeUrl: () => 'url'
      }
    });

    await wrapper.vm.fetchData();

    expect(window.fetch).toHaveBeenCalledWith('url');
    expect(jsonMock).toHaveBeenCalled();
    expect(wrapper.vm.data).toBe('GITHUB DATA');
  });
});
