This document will be used to track the class structure to (hopefully) prevent double up's of processes


index.php

-vendor/autoload.php

-classes/loadClasses.php

--classes/core--
--classes/core/loadCore.php
---classes/core/classCore.php
---classes/core/formBuilder.php
---classes/core/fileHandler.php

--classes/merchant--
--classes/merchant/loadMerchant.php
---classes/merchant/merchantCore.php

--classes/cardManagement--
--classes/cardManagement/cardManagementLoader.php
---classes/cardManagement/cardDashAdmin.php

-views/loadViews.php
--views/testing.php
