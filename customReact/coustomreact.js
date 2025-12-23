function customRender(reactElement, container) {
    // 1. Create real DOM element
    const domElement = document.createElement(reactElement.type)

    // 2. Set text
    domElement.innerHTML = reactElement.children

    // 3. Set attributes (props)
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // using loop to set all props one by one
    for(const prop in reactElement.props){
        if(prop === 'children')
            continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    // 4. Append to container
    container.appendChild(domElement)
}


/*
<a href="https://google.com" target="_blank">
  Click me to visit google
</a>
*/
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}



const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
