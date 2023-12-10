import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Feature", "var", "let", "const"];
 
const TABLE_ROWS = [
  {
    feature: "Scope",
    varVar: "Belongs to the entire function it's in",
    letVar: "Belongs to the block of code it's in (inside {})",
    constVar: "Belongs to the block of code it's in, just like let",
  },
  {
    feature: "Reassignment",
    varVar: "Can change its value later in the program",
    letVar: "Can change its value later in the program",
    constVar: "Can't change its value once it's set",
  },
  {
    feature: "Hoisting",
    varVar: "Gets lifted to the top of its containing scope",
    letVar: "Gets lifted to the top of its block scope",
    constVar: "Gets lifted to the top of its block scope",
  },
  {
    feature: "Initialization",
    varVar: "Can be used before it's declared",
    letVar: "Can't be used before it's declared, but can be reassigned",
    constVar: "Must be given a value when declared, can't be reassigned",
  },
  {
    feature: "Global Object Property",
    varVar: "Adds a property to the global object",
    letVar: "Does not add a property to the global object",
    constVar: "Does not add a property to the global object",
  },
];
 
const VarLetConst = () => {
  return (
    <Card>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 rounded-t-md">
                <div className="font-bold">
                  {head}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ feature, varVar, letVar, constVar }, index) => (
            <tr key={`${feature}-${index}`} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <div variant="small" color="blue-gray" className="font-normal w-28">
                  {feature}
                </div>
              </td>
              <td className="p-4">
                <div variant="small" color="blue-gray" className="font-normal w-28">
                  {varVar}
                </div>
              </td>
              <td className="p-4">
                <div variant="small" color="blue-gray" className="font-normal w-28">
                  {letVar}
                </div>
              </td>
              <td className="p-4">
                <div variant="small" color="blue-gray" className="font-normal w-28">
                  {constVar}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default VarLetConst;