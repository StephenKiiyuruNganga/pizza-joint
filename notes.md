# Variants

They allow us to

1. write cleaner & neater code

2. propagate parent animation attributes down thru the DOM. If you have a parent element that uses variants with an initial and animate property, those values are going to be propagated to its children motion elements.
   Eg: In Base.js there is a child called "next". This child inherits the initial and animate keyword values from the parent i.e "hidden" and "visible" as its own values for initial and animate props. If we had named the varaints for "next" something different from "hidden" and "visibel" then it would not work
