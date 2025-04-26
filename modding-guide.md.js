const guideContent = {
  intro: `
    <h2>Welcome to the 3DS Modding Guide</h2>
    <p>This guide will walk you through the process of modding your Nintendo 3DS, installing custom firmware, homebrew apps, and troubleshooting common issues.</p>
    <ul>
      <li><strong>Disclaimer:</strong> Modding your 3DS can void your warranty and carries some risk. Follow instructions carefully. You are responsible for your device.</li>
      <li>This guide is for educational purposes only.</li>
    </ul>
    <p>Use the navigation above to jump to each step.</p>
  `,
  prep: `
    <h2>Preparation</h2>
    <ol>
      <li>Charge your 3DS to at least 80%.</li>
      <li>Backup your SD card to your computer.</li>
      <li>Format your SD card as FAT32 (use <a href="https://www.sdcard.org/downloads/formatter/" target="_blank">SD Card Formatter</a> if needed).</li>
      <li>Download the latest <a href="https://3ds.hacks.guide/" target="_blank">3DS Hacks Guide</a> starter pack and extract it to your SD card.</li>
      <li>Ensure your 3DS is on the latest firmware (as of 2024, 11.17.0-50U/E/J/K is supported).</li>
    </ol>
  `,
  cfw: `
    <h2>Installing Custom Firmware (Luma3DS & GodMode9)</h2>
    <ol>
      <li>Follow the <a href="https://3ds.hacks.guide/" target="_blank">3ds.hacks.guide</a> for your specific model (Old/New 3DS/2DS).</li>
      <li>Use the <strong>Seedminer</strong> or <strong>ntrboot</strong> method as appropriate.</li>
      <li>Copy <code>Luma3DS</code> and <code>GodMode9</code> files to your SD card as instructed.</li>
      <li>Boot into <strong>SafeB9SInstaller</strong> as per the guide.</li>
      <li>Install <strong>boot9strap</strong> and <strong>Luma3DS</strong>.</li>
      <li>After installation, hold <code>SELECT</code> while powering on to access the Luma3DS configuration menu.</li>
      <li>Boot into <strong>GodMode9</strong> by holding <code>START</code> while powering on.</li>
    </ol>
    <p><strong>Tip:</strong> Always keep a backup of your NAND before making changes in GodMode9.</p>
  `,
  homebrew: `
    <h2>Installing Homebrew Launcher</h2>
    <ol>
      <li>Download the latest <a href="https://github.com/fincs/new-hbmenu/releases" target="_blank">Homebrew Launcher</a> (<code>boot.3dsx</code>).</li>
      <li>Place <code>boot.3dsx</code> on the root of your SD card.</li>
      <li>On your 3DS, open the <strong>Download Play</strong> app, then press <code>L + Down + Select</code> to open the <strong>Rosalina menu</strong>.</li>
      <li>Navigate to <strong>Miscellaneous options</strong> &gt; <strong>Switch the hb. title to the current app</strong>.</li>
      <li>Press <code>Home</code> and reopen Download Play to launch the Homebrew Launcher.</li>
    </ol>
  `,
  apps: `
    <h2>Installing FBI, Anemone3DS, and More</h2>
    <ol>
      <li>Download <a href="https://github.com/Steveice10/FBI/releases" target="_blank">FBI</a> (<code>FBI.cia</code>), <a href="https://github.com/astronautlevel2/Anemone3DS/releases" target="_blank">Anemone3DS</a> (<code>Anemone3DS.cia</code>), and other desired .cia apps.</li>
      <li>Copy the <code>.cia</code> files to your SD card (e.g., <code>/cias/</code> folder).</li>
      <li>Open <strong>FBI</strong> from the Homebrew Launcher or as an installed app.</li>
      <li>Navigate to <code>SD &gt; cias</code>, select the .cia files, and choose <strong>Install and delete</strong>.</li>
      <li>Press <code>Home</code> to find your new apps on the Home Menu.</li>
    </ol>
    <p><strong>Other recommended apps:</strong> Checkpoint (save manager), Universal-Updater, TwilightMenu++ (DS games), etc.</p>
  `,
  troubleshooting: `
    <h2>Troubleshooting & Error Fixes</h2>
    <ul>
      <li><strong>Black screen after modding:</strong> Try holding <code>SELECT</code> while powering on. If Luma3DS config appears, your CFW is working. If not, check your SD card files.</li>
      <li><strong>Failed to boot:</strong> Ensure <code>boot.firm</code> is on the SD root. Try a different SD card or reformat as FAT32.</li>
      <li><strong>GodMode9 errors:</strong> Double-check file placement. Update to the latest version.</li>
      <li><strong>FBI cannot install .cia:</strong> Make sure you have enough free space. Try another SD card. Some .cia files may be corrupted.</li>
      <li><strong>Homebrew Launcher won't start:</strong> Re-do the Rosalina menu steps. Make sure <code>boot.3dsx</code> is on the SD root.</li>
      <li><strong>Other issues:</strong> Consult the <a href="https://3ds.hacks.guide/troubleshooting" target="_blank">official troubleshooting page</a>.</li>
    </ul>
  `,
  resources: `
    <h2>Useful Resources</h2>
    <ul>
      <li><a href="https://3ds.hacks.guide/" target="_blank">3ds.hacks.guide</a> - The definitive guide for all 3DS modding methods.</li>
      <li><a href="https://discord.gg/MWxPgEp" target="_blank">Nintendo Homebrew Discord</a> - Community support.</li>
      <li><a href="https://github.com/Steveice10/FBI/releases" target="_blank">FBI</a> - .cia installer.</li>
      <li><a href="https://github.com/astronautlevel2/Anemone3DS/releases" target="_blank">Anemone3DS</a> - Theme manager.</li>
      <li><a href="https://github.com/LumaTeam/Luma3DS/releases" target="_blank">Luma3DS</a> - Custom firmware.</li>
      <li><a href="https://github.com/d0k3/GodMode9/releases" target="_blank">GodMode9</a> - File manager and NAND tool.</li>
      <li><a href="https://github.com/FlagBrew/Checkpoint/releases" target="_blank">Checkpoint</a> - Save manager.</li>
      <li><a href="https://3ds.hacks.guide/troubleshooting" target="_blank">Troubleshooting</a> - Official troubleshooting page.</li>
    </ul>
    <p>Always check for the latest versions and read official documentation for each tool.</p>
  `
};

export default guideContent;