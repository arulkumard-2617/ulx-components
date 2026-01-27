import { NAMESPACE } from '../../../utils/component-config';

/**
 * Button Content Component (Internal)
 * Renders the common content for both button and anchor elements
 */
const ButtonContent = <template>
    {{#if @hasIconLeftBlock}}
        {{yield to='iconLeft'}}
    {{else if @iconLeft}}
        <span class='icon left'>{{@iconLeft}}</span>
    {{/if}}
    {{#if @label}}
        <span class='button-label'>{{@label}}</span>
    {{/if}}
    {{#if @isLoading}}
        <i class='{{NAMESPACE}}-button-loading-icon left'><span class='spinner'></span></i>
    {{/if}}
    {{#if @hasIconRightBlock}}
        {{yield to='iconRight'}}
    {{else if @iconRight}}
        <span class='icon right'>{{@iconRight}}</span>
    {{/if}}
</template>;

export default ButtonContent;
