import { useRouter } from 'next/router';
import { Input, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';

export default function Form() {
  const router = useRouter();
  const { type } = router.query;

  const [teammate1, setTeammate1] = useState("");
  const [opponent1, setOpponent1] = useState("");
  const [opponent2, setOpponent2] = useState("");
  const [teamPoints, setTeamPoints] = useState(0);
  const [opponentPoints, setOpponentPoints] = useState(0);

  const handleSubmit = async () => {
    // Qui va la logica per inviare i dati a MongoDB
    alert("Dati inviati con successo!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 className="text-center mb-4">Inserisci dati per {type}</h3>
        <Input label="Teammate1" placeholder="Teammate1" value={teammate1} onChange={(e) => setTeammate1(e.target.value)} fullWidth />
        <Spacer y={1} />
        <Input label="Opponent1" placeholder="Opponent1" value={opponent1} onChange={(e) => setOpponent1(e.target.value)} fullWidth />
        <Spacer y={1} />
        <Input label="Opponent2" placeholder="Opponent2" value={opponent2} onChange={(e) => setOpponent2(e.target.value)} fullWidth />
        <Spacer y={1} />
        <Input label="Team Points" type="number" value={teamPoints} onChange={(e) => setTeamPoints(Number(e.target.value))} fullWidth />
        <Spacer y={1} />
        <Input label="Opponent Points" type="number" value={opponentPoints} onChange={(e) => setOpponentPoints(Number(e.target.value))} fullWidth />
        <Spacer y={1.5} />
        <Button onClick={handleSubmit} fullWidth>Registra</Button>
      </div>
    </div>
  );
}
