import { Card, Text } from '@nextui-org/react';

export default function Insert() {
  const types = ["Briscola a 2", "Briscola a 3", "Briscola a 4", "Briscola a 5", "Briscola a 6"];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {types.map((type) => (
          <Card key={type} hoverable clickable onClick={() => window.location.href = `/form?type=${type}`}>
            <Card.Body>
              <Text h3 className="text-center">{type}</Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
