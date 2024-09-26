const landingPage = {
  createNewAButton: `By.xpath("//a[@data-testid='open-registration-form-button']")`,
};

const signUpPage = {
  firstName: `By.xpath("//input[@name='firstname']")`,
  lastname: `By.xpath("//input[@name='lastname']")`,
  mobileOrEmail: `By.xpath("//input[@name='reg_email__']")`,
  password: `By.xpath("//input[@name='reg_passwd__']")`,
  birthDay_day: `By.xpath("//input[@name='birthday_day']")`,
  birthday_month: `By.xpath("//input[@name='birthday_month']")`,
  birthday_year: `By.xpath("//input[@name='birthday_year']")`,
};

export {landingPage, signUpPage}
