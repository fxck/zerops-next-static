import { Code } from "./Code";

const yamlcode = `project:
  name: zerops-nextjs

services:
  - hostname: nextstatic
    type: nginx@1.22
    nginxConfig: |-
      server {
          listen 80 default_server;
          listen [::]:80 default_server;

          server_name _;
          root /var/www/out;

          location / {
              try_files $uri $uri/ /index.html;
          }

          access_log syslog:server=unix:/dev/log,facility=local1 default_short;
          error_log syslog:server=unix:/dev/log,facility=local1;
      }
    buildFromGit: https://github.com/fxck/zerops-next-static
    enableSubdomainAccess: true
    minContainers: 1`.trim();


export function Steps() {
  return (
        <div className="pt-40 space-y-12 max-w-3xl">
          <div>
            <h2 className="text-[#292929] text-2xl font-semibold">Step 1: Go To Zerops Dashboard </h2>
            <img
            className="rounded-lg my-6"
            alt="zerops dashboard"
            src="zeropsdashboard.png"
            width={845}
            draggable={false}
          />
            <p className="font-medium text-lg mt-3">Click on Import Project button on the sidebar.</p>
          </div>
          <div>
            <h2 className="text-[#292929] text-2xl font-semibold">Step 2: Paste the project Yaml </h2>
            <p className="font-medium text-lg mt-3">Copy the Yaml code mentioned below and paste it to import the project and for more info explore our <a href="https://docs.zerops.io" className="font-bold" target="_blank"> docs</a> and if you still find yourself stuck in the process join our <a href="https://discord.gg/5ptAqtpyvh" className="font-bold" target="_blank">Discord community</a>.</p>
            <Code code={yamlcode} />
          </div>          
        </div>
     );
}
