import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AppComponent } from './app.component';
import '@testing-library/jest-dom';

describe('AppComponent', () => {
  it('should render title', async () => {
    await render(AppComponent);
    expect(screen.getByText(/eduCRM/i)).toBeTruthy();
  });

  it('should respond to user click', async () => {
    const { fixture } = await render(AppComponent, {
      componentProperties: { title: 'Test App' },
    });

    // Misol uchun, sizda <button (click)="clicked = true">Click me</button> bo‘lsa:
    // screen.getByRole('button') orqali uni topamiz:
    // await userEvent.click(screen.getByRole('button'));
  });
});
