import { action, computed, observable, toJS } from 'mobx'
import { observer } from 'mobx-react'

type FormState = {
  years: number
  salary: number
}

const formState: FormState = observable({
  years: 0,
  salary: 0,
})

function MoneyForm() {
  // Without MobX
  //   const [total, setTotal] = useState<number>(0)
  //   const [years, setYears] = useState(0)
  //   const [salary, setSalary] = useState(0)

  // One option
  //   const calculateTotal = action((formState: FormState) => {
  //     formState.total = formState.years * formState.salary
  //   })

  const totalValue = computed(() => formState.salary * formState.years)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <p>Total: {toJS(totalValue)}$</p>
      <input
        type="number"
        placeholder="Years ..."
        style={{ height: '2.5rem' }}
        onChange={action((e) => {
          formState.years += Number(e.target.value)
        })}
      />
      <input
        type="number"
        placeholder="Yearly salary ..."
        style={{ height: '2.5rem' }}
        onChange={(e) => {
          formState.salary += Number(e.target.value)
        }}
      />
    </div>
  )
}

export default observer(MoneyForm)
