import { DateTime } from 'luxon';

class Base {
  static map(collection) {
    return collection.map(i => new this(i));
  }

  constructor(params) {
    this.params = params;
  }

  get id() {
    return this.params.id;
  }

  get truncatedId() {
    return (this.id || '').substring(0, 8);
  }

  get name() {
    return this.params.name;
  }

  get type() {
    return this.params.type;
  }

  get root() {
    const { root_id: id, root_name: name } = this.params;
    if (!id) {
      return undefined;
    }
    return { id, name, type: 'root' };
  }

  get company() {
    const { company_name: name, company_id: id } = this.params;
    if (!id) {
      return null;
    }
    return { id, name };
  }

  get property() {
    const { property_name: name, property_id: id } = this.params;
    if (!id) {
      return undefined;
    }
    return { id, name };
  }

  get building() {
    const { building_name: name, building_id: id } = this.params;
    if (!id) {
      return undefined;
    }
    return { id, name };
  }

  get unit() {
    const { unit_name: name, unit_id: id } = this.params;
    if (!id) {
      return undefined;
    }
    return { id, name };
  }

  get createdAt() {
    const { created_at: createdAt } = this.params;
    return createdAt ? DateTime.fromSeconds(createdAt) : undefined;
  }

  get updatedAt() {
    const { updated_at: updatedAt } = this.params;
    return updatedAt ? DateTime.fromSeconds(updatedAt) : undefined;
  }

  get lastTimestamp() {
    return !this.updatedAt ? this.createdAt : this.updatedAt;
  }

  get enabled() {
    return this.params.enabled;
  }

  get settings() {
    return this.params.settings;
  }

  patch(properties) {
    this.params = { ...this.params, properties };
  }

  toJSON() {
    return this.params;
  }
}

export default Base;
