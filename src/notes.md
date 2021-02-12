#App notes

##CSS in JS
Let us say we use a class **card** inside a component that displays cards. After a while, another developer creates a similar looking component that uses the class **card** as well. He will notice that there are several clashes in the styling of his component.
There are solutions in CSS e.g. **BEM** convention - block-element-modifier. If a block is within another block, the inner block class is named **block1__block2**. This creates really long names!
One of the most popular component is **styled-components**. Less popular are **radium** and **aphrodite**. People believe CSS and JS should be separate. Advantage is that - having JS run CSS is performant. It also helps better compartmentalize components that have their functionality and styles!

###Vanilla styling in JS
```
const textStyles = {
    color: 'red',
    fontSize: 12px
}

<div styles={textStyles} > Hello </div>
```
**disadvantage** - It just makes things look really cumbersome. It also does not provide all the CSS selectors that we might want to use.

**Advantage** - This will never cause the styles to bleed across components. It applies styles to that div only!

###Styled components
Is the extra learning curve worth it?
1. As applications grow, we need to add a new style, a new component to make it better
2. Really good senior devs are good since they make the judgment call




