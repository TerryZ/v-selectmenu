<template>
    <li v-if="data && Object.keys(data).length" :class="{
        'sm-divider':isDivider(data),
        'sm-header':data.header,
        'sm-disabled': data.disabled
        }" >
        <a :href="data.url&&!data.disabled?data.url:'javascript:void(0);'"
           :target="data.open?'_blank':'_self'"
           @click="click($event, data)"
           v-if="data.content !== 'sm-divider' && data.content !== 'sm_divider'">
            <span v-html="data.content"></span>
            <span class="sm-caret" v-if="data.menus"></span>
        </a>
    </li>
</template>

<script>
    export default {
        name: "v-menu-item",
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        inject: ['parentInst'],
        methods: {
            isDivider(data){
                return data.content === 'sm-divider' || data.content === 'sm_divider';
            },
            click(e, row){
                if(row.disabled) return;
                if(row && row.callback && typeof(row.callback) === 'function') {
                    row.callback.call(this.parentInst);
                }
            }
        }
    }
</script>