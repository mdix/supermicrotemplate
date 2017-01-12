(function(root, factory) {
    if(typeof define === "function" && define.amd) {
        define([], factory)
    } else if(typeof module === "object" && module.exports) {
        module.exports = factory()
    } else {
        root.supermicrotemplate = factory()
    }
}(this, function() {
    return (template, values) => {
        Object.keys(values).forEach((placeholder) => {
            template = template.replace(new RegExp(placeholder, "g"), values[placeholder])
        })
        return template
    }
}))
