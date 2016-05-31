import { buildCategoryPanel } from 'nilavu/components/edit-category-panel';
import PermissionType from 'nilavu/models/permission-type';

export default buildCategoryPanel('summary', {
  editingPermissions: false,
  selectedGroup: null,
  selectedPermission: null,

  sshFrequencies: [{ name: I18n.t('launcher.ssh_key_is_new'), value: 1 },
                      { name: I18n.t('launcher.ssh_key_use_old'), value: 2 }],

  actions: {
    editPermissions() {
      if (!this.get('category.is_special')) {
        this.set('editingPermissions', true);
      }
    },

    addPermission(group, id) {
      if (!this.get('category.is_special')) {
        this.get('category').addPermission({
          group_name: group + "",
          permission: PermissionType.create({id})
        });
      }
    },

    removePermission(permission) {
      if (!this.get('category.is_special')) {
        this.get('category').removePermission(permission);
      }
    },
  }
});
