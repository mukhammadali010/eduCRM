import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render title', async () => {
    await render(AppComponent);
    expect(screen.getByText(/eduCRM/i)).toBeTruthy();
  });

  it('should respond to user click', async () => {
    await render(AppComponent, {
      componentProperties: { title: 'Test App' },
    });
    // Example click test (faollashtirish uchun tugma kerak):
    // await userEvent.click(screen.getByRole('button'));
  });
});
