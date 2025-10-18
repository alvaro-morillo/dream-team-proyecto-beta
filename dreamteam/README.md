# dream-team-proyecto-beta
proyecto REACT clase 



### BillInput explicacion

1- ¿Qué es htmlFor?

Es un equivalente en React del atributo for en HTML

2 - ¿Por qué onChange se escribe así?
``` js
onChange={(e) => onChange(Number(e.target.value))}
```
Desglose:
 - e = evento del input
 - e.target = elemento que disparó el evento (el input)
 - e.target.value = valor actual del input

3 - ¿Cómo se reciben los valores del padre?

En el componente hijo (BillInput):
export default function BillInput({ value, onChange }) {
  // value = viene del padre (estado 'bill')
  // onChange = viene del padre (función 'setBill')
 
  ```js
  return (
    <input
      value={value}           // ← Valor actual del padre
      onChange={(e) => onChange(Number(e.target.value))} // ← Actualiza al padre
    />
  );
  ```

### Flujo completo de datos:

Padre → Hijo: value={bill} envía el valor actual

Hijo → Padre: onChange={setBill} permite que el hijo actualice el estado del padre

Cuando escribes: El hijo ejecuta setBill(nuevoValor) y actualiza el estado del padre

Re-render: El padre se re-renderiza y envía el nuevo valor al hijo

Ejemplo visual del flujo:

``` js
// PADRE - Tiene el estado
const [bill, setBill] = useState(100);

// Envía al hijo:
<BillInput value={bill} onChange={setBill} />

// HIJO - Recibe y usa
function BillInput({ value, onChange }) {
  // Cuando el usuario escribe "150":
  // 1. e.target.value = "150" (string)
  // 2. Number("150") = 150 (number)
  // 3. onChange(150) = ejecuta setBill(150) en el padre
}
```