// import { Welcome } from '@storybook/angular/demo';
// import { HttpClient} from "@angular/common/http";

// import { AesEncryptComponent } from './../app/aes-encrypt/aes-encrypt.component';

// export default {
//   title: 'aescomponent',
//   component: Welcome,
// };

// export const ToStorybook = () => ({
//   component: Welcome,
//   props: {},
// });

// ToStorybook.story = {
//   name: 'default',
// };

import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { FormControl, Validators, FormGroup ,FormBuilder } from '@angular/forms';

import { CardComponent } from 'src/app/card/card.component';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';





storiesOf('Card', module)
  .add('empty', () => ({
    component: CardComponent,
    props: {}
  }))
  .add('with title', () => ({
    component: CardComponent,
    props: {
      title: 'This is for visual testing for each component'
    }
  }))
  .add('with title and subtitle', () => ({
    component: CardComponent,
    props: {
      title: 'This is for visual testing for each component',
      subtitle: 'Well whats up'
    }
  }))
  .add(
    'with notes',
    withNotes('notes')(() => ({
      component: CardComponent,
      props: {}
    }))
  )
  .add('with action', () => ({
    component: CardComponent,
    props: {
      title: 'Testing for whole template',
      subtitle: 'please click the button',
      btnClicked: action('Button was clicked')
    }
  }));




storiesOf('Card', module)
  .add('full page', () => ({
    component: SignUpComponent,
    props: {}
  }))
