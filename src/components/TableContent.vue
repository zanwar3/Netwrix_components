<script>
export default {
  name: 'TableContent',
  props: {
    heading: String,
  },
  components: {
    
  },
  data () {
    return {
      
    }
  }
}
</script> 

<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{ heading }}</h3>
    </div>
    <div class="">
      <table class="table">
        <thead>
          <tr>
            <th><i class="fa-solid fa-filter"></i></th>
            <th>
              Group by:
              <div class="btn-group">
                <button type="button" class="btn btn-danger">
                  Action
                </button>
                <button
                  type="button"
                  class="
                    btn btn-danger
                    dropdown-toggle dropdown-toggle-split
                  "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Another action</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"
                      >Something else here</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
              <i class="fa-solid fa-circle-chevron-down"></i>
              <i class="fa-solid fa-circle-chevron-up"></i>
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="ligh-black">
            <td scope="row">Host</td>
            <td>Share</td>
            <td>Criteria</td>
            <td>File</td>
            <td>Matches</td>
            <td>Open Access</td>
          </tr>
          <tr>
            <td scope="row">FS02</td>
            <td>Accounting</td>
            <td>US SSN</td>
            <td>\\FS02\accounting\Financials\Departme</td>
            <td>94</td>
            <td>False</td>
          </tr>
          <tr>
            <td scope="row">FS02</td>
            <td>Accounting</td>
            <td>US SSN</td>
            <td>\\FS02\accounting\Financials\Departme</td>
            <td>94</td>
            <td>False</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
