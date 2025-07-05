import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ResultPg from '../Result';
import { btnColorState, gunLinkState, videoLinkState } from '../../store/answerStates';

const initialState = {
  [videoLinkState.key]: 'https://example.com/video',
  [gunLinkState.key]: '/img.png',
  [btnColorState.key]: 'rgb(0, 0, 255)',
};

function renderResult() {
  return render(
    <RecoilRoot initializeState={({ set }) => {
      set(videoLinkState, initialState[videoLinkState.key]);
      set(gunLinkState, initialState[gunLinkState.key]);
      set(btnColorState, initialState[btnColorState.key]);
    }}>
      <ResultPg />
    </RecoilRoot>
  );
}

describe('Result Component', () => {
  it('renders result information from recoil state', () => {
    renderResult();

    const img = screen.getByRole('img', { name: initialState[gunLinkState.key] });
    expect(img).toHaveAttribute('src', initialState[gunLinkState.key]);

    const ytLink = screen.getByRole('link', { name: '선수 영상 보러 가기' });
    expect(ytLink).toHaveAttribute('href', initialState[videoLinkState.key]);
    expect(ytLink).toHaveStyle(`background-color: ${initialState[btnColorState.key]}`);
  });
});
