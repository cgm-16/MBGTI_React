import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MBGTI from '../Test';
import { quizQuestions } from '../../store/quizStrings';

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <RecoilRoot>
      <MemoryRouter initialEntries={["/test"]}>
        <Routes>
          <Route path="/test" element={ui} />
          <Route path="/result" element={<div>Result Page</div>} />
        </Routes>
      </MemoryRouter>
    </RecoilRoot>
  );
}

describe('MBGTI Test Component', () => {
  it('shows the next question when an answer is chosen', async () => {
    renderWithProviders(<MBGTI />);

    // first question visible
    expect(screen.getByText(quizQuestions[0])).toBeInTheDocument();

    // choose first option
    act(() => {
      userEvent.click(screen.getAllByText('A')[0]);
    });

    expect(
      await screen.findByText(/근처에 보급품이/, { exact: false })
    ).toBeInTheDocument();
  });

  it('navigates to result page after completing all questions', async () => {
    renderWithProviders(<MBGTI />);

    for (let i = 0; i < quizQuestions.length; i += 1) {
      act(() => {
        userEvent.click(screen.getAllByText('A')[0]);
      });
    }

    expect(await screen.findByText('Result Page')).toBeInTheDocument();
  });
});
