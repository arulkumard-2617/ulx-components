import Component from '@glimmer/component';
import { action } from '@ember/object';
import { NAMESPACE } from '../../../utils/component-config';
import { on } from '@ember/modifier';
import ButtonContent from './_content.gjs';

/**
 * ULS Button Component
 * Button component for user interactions
 *
 * @param {string} label - Button label text
 * @param {string} iconLeft - Left icon identifier
 * @param {string} iconRight - Right icon identifier
 * @param {boolean} disabled - Disabled state
 * @param {boolean} loading - Loading state
 * @param {string} variant - Button variant (default, primary, secondary, etc.)
 * @param {string} size - Button size (s-size, m-size, l-size)
 * @param {string} type - Button type (button, submit, reset)
 * @param {function} onClick - Click handler
 * @param {string} href - Link URL (renders as anchor)
 * @param {string} target - Link target (_blank, _self, etc.)
 */

export default class UlsButton extends Component {
    // Label
    get label() {
        return this.args.label;
    }

    // Icon args
    get iconLeft() {
        return this.args.iconLeft;
    }

    get iconRight() {
        return this.args.iconRight;
    }

    get hasIconLeft() {
        return !!this.iconLeft;
    }

    get hasIconRight() {
        return !!this.iconRight;
    }

    // Disabled state
    get isDisabled() {
        return this.args.disabled ?? false;
    }

    // Loading state
    get isLoading() {
        return this.args.loading ?? false;
    }

    // Combined disabled state (disabled OR loading)
    get isButtonDisabled() {
        return this.isDisabled || this.isLoading;
    }

    // Size
    get size() {
        return this.args.size || 's-size';
    }

    // Variant
    get variant() {
        return this.args.variant || 'default';
    }

    // Type
    get type() {
        return this.args.type ?? 'button';
    }

    // Determine if should render as button or link
    get isButton() {
        return !this.args.href || this.isButtonDisabled;
    }

    get href() {
        return this.args.href;
    }

    get target() {
        return this.args.target;
    }

    // Build button classes
    get buttonClasses() {
        const baseClass = `${NAMESPACE}-button`;
        const classes = [baseClass];

        // Add variant and size
        classes.push(this.variant);
        classes.push(this.size);

        // Add state classes
        if (this.isButtonDisabled) classes.push('disabled');
        if (this.isLoading) classes.push('loading');

        // Add icon classes (props only - blocks handled in template)
        if (this.hasIconLeft) classes.push('has-icon-left');
        if (this.hasIconRight) classes.push('has-icon-right');

        // Add custom classes
        if (this.args.customClasses) classes.push(this.args.customClasses);
        if (this.args.class) classes.push(this.args.class);

        return classes.join(' ');
    }

    // Click handler
    @action
    handleClick(event) {
        // Prevent action if disabled or loading
        if (this.isButtonDisabled) {
            event.preventDefault();
            return;
        }

        // Call the onClick handler if provided
        if (this.args.onClick) {
            this.args.onClick(event);
        }
    }

    <template>
        {{#if this.isButton}}
            <button
                class='{{this.buttonClasses}}'
                type={{this.type}}
                disabled={{this.isButtonDisabled}}
                {{on 'click' this.handleClick}}
                ...attributes
            >
                <ButtonContent
                    @iconLeft={{this.iconLeft}}
                    @label={{this.label}}
                    @iconRight={{this.iconRight}}
                    @isLoading={{this.isLoading}}
                    @hasIconLeftBlock={{has-block 'iconLeft'}}
                    @hasIconRightBlock={{has-block 'iconRight'}}
                />
            </button>
        {{else}}
            <a
                href={{this.href}}
                target={{this.target}}
                class='{{this.buttonClasses}}'
                ...attributes
            >
                <ButtonContent
                    @iconLeft={{this.iconLeft}}
                    @label={{this.label}}
                    @iconRight={{this.iconRight}}
                    @isLoading={{this.isLoading}}
                    @hasIconLeftBlock={{has-block 'iconLeft'}}
                    @hasIconRightBlock={{has-block 'iconRight'}}
                />
            </a>
        {{/if}}
    </template>
}
