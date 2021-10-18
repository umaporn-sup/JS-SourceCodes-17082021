# Selecting Elements
1. The Document type provides two methods to specific element or sets of elements to perform certain operations.
- getElementById() - returns the element if found, or null if an element with that ID doesn’t exist. 
- getElementsByTagName() - returns an HTMLCollection of elements with the given tag name.
- getElementsByName() - returns a NodeList, which returns all elements that have a given name attribute.
- getElementsByClassName() - returns a NodeList containing all elements that have all of the specified classes applied. 
- querySelector() - a CSS query and returns the first descendant element that matches the pattern or null if there is no matching element. 
- querySelectorAll() - the CSS query and returns all matching nodes instead of just one. This method returns a static instance of NodeList.
2. An HTMLCollection is a collection of HTML elements.
3. A NodeList is a collection of document nodes.
4. Both an HTMLCollection object and a NodeList object is an array-like (collection) of objects.

