import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { globalStyle } from '../components/shared/styles';


const decorators = [jsxDecorator, withKnobs, globalStyle];

export default decorators;
