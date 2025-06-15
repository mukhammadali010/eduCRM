import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render title', async () => {
    await render(AppComponent);
    expect(screen.getByText(/EduCRM Application/i)).toBeTruthy();
  });

  it('should render router outlet', async () => {
    const { fixture } = await render(AppComponent);
    expect(fixture.debugElement.nativeElement.querySelector('router-outlet')).toBeTruthy();
  });

  it('should respond to user click', async () => {
    await render(AppComponent, {
      componentProperties: { title: 'Test App' },
    });
    // Example click test (faollashtirish uchun tugma kerak):
    // await userEvent.click(screen.getByRole('button'));
  });
});
