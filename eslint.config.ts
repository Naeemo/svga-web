import eslint from '@eslint/js'
import prettierConfig from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist/',
      'src/proto/svga.js',
      'src/proto/svga.d.ts',
      'tests/*.min.js',
      'tests/dist/',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  eslintConfigPrettier,
)
