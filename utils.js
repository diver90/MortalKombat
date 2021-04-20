export const createElement = (tag, className) => {
    let $element = document.createElement(tag);
    if(className){
        $element.classList.add(className);
    }
    return $element;
}

export const getRandom = (val) => Math.ceil(Math.random() * val);