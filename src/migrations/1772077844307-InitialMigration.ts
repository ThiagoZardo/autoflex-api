import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1772077844307 implements MigrationInterface {
  name = 'InitialMigration1772077844307';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`value\` decimal(10,2) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product_raw_materials\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantityRequired\` int NOT NULL, \`product_id\` int NULL, \`raw_material_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`raw_materials\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`stockQuantity\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`product_raw_materials\` ADD CONSTRAINT \`FK_85be8334b429efdee424b0572db\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`product_raw_materials\` ADD CONSTRAINT \`FK_9f0de0bbc3aaab2a76f6741c0d2\` FOREIGN KEY (\`raw_material_id\`) REFERENCES \`raw_materials\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`product_raw_materials\` DROP FOREIGN KEY \`FK_9f0de0bbc3aaab2a76f6741c0d2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`product_raw_materials\` DROP FOREIGN KEY \`FK_85be8334b429efdee424b0572db\``,
    );
    await queryRunner.query(`DROP TABLE \`raw_materials\``);
    await queryRunner.query(`DROP TABLE \`product_raw_materials\``);
    await queryRunner.query(`DROP TABLE \`products\``);
  }
}
