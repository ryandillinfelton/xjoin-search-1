const playground = {
    tabs: [{
        endpoint: '',
        name: 'hosts',
        query: `{
  hosts (filter: {
    OR: [{
      system_profile_fact: {
        key: "os_release"
        value: "7.4"
      }
    }, {
      system_profile_fact: {
        key: "os_release"
        value: "7.5"
      }
    }]
  }) {
    meta { count, total }
    data { id account display_name system_profile_facts }
  }
}`
    }]
};

export default playground;
