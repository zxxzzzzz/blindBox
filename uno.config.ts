import presetIcons from '@unocss/preset-icons';
import { presetUno, defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      /* options */
    }),
    // ...other presets
  ],
});
