import { useForm } from './context/FormContext';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';

function App() {
  const { step } = useForm();

  return (
    <div>

      {/* Step Content */}
      <div>
        {step === 1 ? <Step1 /> : <Step2 />}
      </div>
    </div>
  );
}

export default App;
