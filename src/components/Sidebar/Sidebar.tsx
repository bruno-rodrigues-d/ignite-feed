import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/bruno-rodrigues-d.png" />

        <strong>Bruno Rodrigues</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}