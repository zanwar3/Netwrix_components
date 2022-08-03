import Vue from 'vue'
import Router from 'vue-router'
// import "bootstrap/dist/css/bootstrap.min.css"

import HelloWorld from '@/components/HelloWorld'
import Netwrix3 from '@/components/Netwrix3'
import Netwrix5 from '@/components/Netwrix5'
import Netwrix6 from '@/components/Netwrix6'
import Netwrix7 from '@/components/Netwrix7'
import Netwrix8 from '@/components/Netwrix8'
import Netwrix9 from '@/components/Netwrix9'
import Netwrix10 from '@/components/Netwrix10'
import Netwrix17 from '@/components/Netwrix17'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Netwrix3',
      component: Netwrix3
    },
    {
      path: '/5',
      name: 'Netwrix5',
      component: Netwrix5
    },
    {
      path: '/6',
      name: 'Netwrix6',
      component: Netwrix6
    },
    {
      path: '/7',
      name: 'Netwrix7',
      component: Netwrix7
    },
    {
      path: '/8',
      name: 'Netwrix8',
      component: Netwrix8
    },
    {
      path: '/9',
      name: 'Netwrix9',
      component: Netwrix9
    },
    {
      path: '/10',
      name: 'Netwrix10',
      component: Netwrix10
    },
    {
      path: '/17',
      name: 'Netwrix17',
      component: Netwrix17
    }
  ]
})
