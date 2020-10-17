import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { globalStyle } from '../components/shared/styles';
import { withInfo } from '@storybook/addon-info';


const decorators = [jsxDecorator, withKnobs, withInfo, globalStyle];

export default decorators;
