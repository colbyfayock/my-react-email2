'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <button
          onClick={async function handleOnClick() {
            const results = await fetch('/api/login', {
              method: 'POST',
              body: JSON.stringify({
                validationCode: `efgh5678`
              })
            });
            console.log('results', results)
          }}
        >
          Send Email
        </button>
      </div>
    </main>
  );
}
