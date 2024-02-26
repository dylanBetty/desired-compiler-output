# Update form - page variables

## Project structure

```
| data-api      // Mocked runtime data
| generated-app // App that the compiler should generate
  | src
    | hooks     // generated hooks
    | slices    // rtk-query / api slice & generated pageVariable slices
    | App.tsx   // generated app (where the hooks are placed & used)
```
