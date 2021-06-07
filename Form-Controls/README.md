# HTML/ CSS Week 3

## Forms, styling forms, and Devtools

## Aims

- Interpret requirements
- Write a valid form
- Style form controls
- Test with Devtools
- Refactor using Devtools

## Task

We are selling t-shirts. Write a form to collect the following data:

Our customers already have accounts, so we know their addresses and charging details already. We don't need to collect that data. We want to confirm they are the right person, then get them to choose a colour and then pick a delivery date.

Writing that out as a series of questions to ask yourself:

1. What is the customer's name? I must collect this data, and validate it. But what is a valid name? I must decide something.
2. What is the customer's email? I must make sure the email is valid. Email addresses have a consistent pattern.
3. What colour should this t-shirt be? I must give three options. How will I make sure they don't pick other colours?
4. When do they want the t-shirt to be delivered? I must collect a date and make sure that date is in the next four weeks. How will I do this? How will I make sure there are no mistakes about the date?

All fields are required.
Do not write a form action for this project.

## Developers must test their work.

Let's write out our testable criteria:

- [ ] I have used HTML and CSS only.

### HTML

- [ ] My form is semantic html.
- [ ] My Lighthouse Accessibility score is 100.
- [ ] All inputs have associated labels.
- [ ] I require a valid name. I have defined a valid name as a text string of two characters or more.
- [ ] I require a valid email.
- [ ] I require one colour from a defined set of three colours.
- [ ] I require one date from a constrained date range.

### CSS

- [ ] My form is usable at phone and desktop screen sizes.
- [ ] I show which element is focused.
- [ ] My Lighthouse Accessibility score is 100.

## Extension Task

If you have done all these things and you would like a really big challenge, run a further test and refactor your code.

- In Chrome Devtools, open the Command Palette
  https://developer.chrome.com/docs/devtools/command-menu/
- Type 'coverage' and open the Coverage drawer
  https://developer.chrome.com/docs/devtools/coverage/
- Refactor your code until you have no unused CSS, or as close to that as you can get. Prettier will prevent you minifying your code so the last few bytes are out of your reach, sorry!
- This challenge isn't about writing less CSS, it's about writing less _pointless_ CSS, so don't remove code that is actually being used in your layout.
- Insider tip: you might have to select some elements so their focus states don't get miscounted as unused. You can force state in Devtools:
  https://twitter.com/ChromeDevTools/status/986992837127319552
- Take a screenshot of your coverage stats.

Sanity check: this extension is tough! Try it in your own time and don't let it hold up your coursework submission.
