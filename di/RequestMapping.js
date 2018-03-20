let RequestMapping = (option)=> {
    console.log("RequestMapping", option);
    return (targt, name, descriptor)=> {
        console.log(targt, name, descriptor);
        return descriptor;
    };
};
module.exports = RequestMapping;