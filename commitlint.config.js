export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // nueva funcionalidad
        'fix', // corrección de bug
        'docs', // cambios en documentación
        'style', // formato, espacios, comas (no afecta lógica)
        'refactor', // refactorización de código
        'test', // agregar o modificar pruebas
        'chore', // tareas de mantenimiento
        'perf', // mejoras de rendimiento
        'ci', // cambios en CI/CD
        'build', // cambios en el sistema de build
        'revert', // revertir un commit anterior
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 72],
    'subject-case': [2, 'never', ['upper-case']],
  },
};
