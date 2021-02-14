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

###Using firestore
What kind of objects can we get back from firestore?
1. QueryReference
2. Snapshot
3. Security rules

We get the first two objects when we make a query - asking DB to give us something. These objects can be of a **document** type or **collection** type. We will always get an object back even if the query returns empty.

**QueryReference** - place in DB that we are querying. It does not have any data.
**Snapshot** - Actually has the data

####DocumentReference and CollectionReference
**DocumentReference** - Can perform CRUD i.e. create, retrieve, update, delete.
1. .set()
2. .get()
3. .update()
4. .delete()

**CollectionReference** - We can add documents to collection using .add()

**.get()** provides us with a Snapshot object.

####DocumentSnapshot
We can check if the document exists using .exists property.



