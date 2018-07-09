import vSelectMenu from './vSelectMenu.vue';

const Plugin = {
    install(Vue, options = {}){
        if(Object.keys(options).length){
            if(typeof(options.title)!=='undefined') vSelectMenu.props.title.default = options.title;
            if(typeof(options.language)==='string') vSelectMenu.props.language.default = options.language;
            if(typeof(options.query)==='boolean') vSelectMenu.props.query.default = options.query;
            if(typeof(options.scroll)==='boolean') vSelectMenu.props.scroll.default = options.scroll;
        }
        Vue.component(vSelectMenu.name, vSelectMenu);
    }
};

export default Plugin;