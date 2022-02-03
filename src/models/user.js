import Base from './base.model';

class User extends Base {
  get id() {
    return this.params.id;
  }

  get email() {
    return this.params.email;
  }

  get pref() {
    return {
      lang: this.params.pref_language,
      temp_units: this.params.pref_temp_units,
      items_per_page: this.params.pref_items_per_page
    };
  }
}

export default User
