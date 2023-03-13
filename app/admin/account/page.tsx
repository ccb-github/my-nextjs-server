import { accounts } from '#/lib/demos';
import MyButton from '#/ui/MyButton';
import Link from 'next/link';
import type { Item } from '#/lib/demos';

export default function Page() {
  let accounts: Item[] = [{ name:"",slug:"/1", description: `To user 1`}]
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>
      <div className="space-y-10 text-white">
        {accounts.map((item) => {
          return (
            <>
              <Link
                href={`/${item.slug}`}
                key={item.name}
                className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
              >
                <div className="font-medium text-gray-200 group-hover:text-gray-50">
                  {item.name}
                </div>

                {item.description ? (
                  <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                    {item.description}
                  </div>
                ) : null}
              </Link>
              <MyButton alertTitle={item.name}></MyButton>
            </>
          );
        })}
      </div>
    </div>
  );
}
