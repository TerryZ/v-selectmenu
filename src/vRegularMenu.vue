<template>
    <div v-if="data && data.length">
        <ul class="sm-results sm-regular sm-menu-root"
            v-show="currentMenu === 'root'" >
            <!-- regular menu items -->
            <v-menu-item :data="menu" is="v-menu-item"
                         :key="'root-'+index"
                         @click.native="switchSub(menu)"
                         v-for="menu,index in data"></v-menu-item>
        </ul>
        <!--<transition-group tag="span" name="vivify" enter-class="fadeInLeft" leave-class="fadeInRight">-->
        <ul class="sm-results sm-regular sm-sub-menu vivify fadeInRight"
            :key="'sub-menu-'+index"
            v-show="currentMenu === sub.mKey"
            v-for="sub,index in subMenus">
            <li class="sm-sub-header">
                <button type="button" class="sm-sub-back" @click="switchSub(sub.pKey)">
                    <i class="iconfont icon-back"></i>
                </button>
                <p v-html="sub.content"></p>
            </li>
            <li class="sm-divider"></li>
            <v-menu-item :data="item" is="v-menu-item"
                         :key="'item'+index+idx"
                         @click.native="switchSub(item)"
                         v-for="item,idx in sub.menus"></v-menu-item>
        </ul>
        <!--</transition-group>-->
    </div>
</template>

<script>
    import mItem from './vMenuItem';
    export default {
        name: "v-regular-menu",
        components: {
            'v-menu-item': mItem
        },
        props: {
            data:{
                type: Array,
                required: true
            },
            show: {
                type: Boolean,
                required: true
            }
        },
        inject: ['parentInst'],
        data(){
            return {
                subMenus: [],
                currentMenu: 'root'
            };
        },
        watch:{
            show(val){
                this.$nextTick(()=>{
                    if(!val) this.currentMenu = 'root';
                })
            },
            data(){
                this.getSubs();
            }
        },
        methods: {
            pushMenu(menu, parent, index){
                if(menu && menu.menus && menu.menus.length){
                    let prefix = 'menu-';
                    if(!parent) {
                        menu.mKey = prefix + index;
                        menu.pKey = 'root';
                    }else{
                        menu.mKey = parent.mKey + '-' + index;
                        menu.pKey = parent.mKey;
                    }
                    this.subMenus.push(menu);
                    for(let i=0;i < menu.menus.length; i++){
                        if(menu.menus[i] && menu.menus[i].menus) this.pushMenu(menu.menus[i], menu, i);
                    }
                }
            },
            getSubs(){
                if(this.data && this.data.length){
                    let list = this.data.concat();
                    for(let i=0;i < list.length; i++){
                        this.pushMenu(list[i], null, i);
                    }
                }
            },
            switchSub(row){
                if(row && row.mKey) this.currentMenu = row.mKey;
                else{
                    if(!row.disabled) this.$emit('close');
                }
            }
        },
        mounted(){
            this.getSubs();
        }
    }
</script>